import axios from "axios";

let host = 'https://miniblogbackend.herokuapp.com';
    // if(process.env.NODE_ENV === 'development') {
    //     host = 'http://localhost:8080';
    // } else {
    //     host = 'http://localhost:8080';
    // }


const API = {
    makeFileURL: (url, token) => {
        return host + url + '?access_token=' + token;
    },
    login: (email, pass, success) => {
        axios.post(`${host}/api/common/login`, {email: email, password: pass})
        .then(res => {
            success(res);
        })
    },
    register: (name, email, pass , success) => {
        axios.post(`${host}/api/common`, {name: name, email: email, password: pass})
        .then(res => {
            success(res);
        })
        .catch(err => {
            success(err);
        })
    },
    getUsers: (token, success) => {
        axios.get(`${host}/api/common?access_token=${token}`)
        .then(res => {
            success(res);
        })
    },
    getPostCount: (success) => {
        axios.get(`${host}/api/Posts/count`)
        .then(res => {
            success(res);
        })
    },
    getPosts: (token, success) => {
        axios.get(`${host}/api/Posts`)
        .then(res => {
            success(res);
        })
    },
    getSitePosts: (skip, success) => {
        axios.get(`${host}/api/Posts`,{
            params: {
                filter: {
                    skip: skip,
                    limit: 3,
                    include: 'PostImage',
                    fields: {
                        id: true,
                        title: true,
                        slug: true,
                        content: true
                    }   
                }
            }
        })
        .then(res => {
            success(res);
        })
    },
    addPost: (post, token, success) => {
        axios.post(`${host}/api/Posts?access_token=${token}`, post)
        .then(res => {
            success(res);
        })
    },
    updatePost : (post, token, success) => {
        axios.patch(`${host}/api/Posts/${post.id}?access_token=${token}`, post)
        .then(res => {
            success(res);
        })
    },
    getSinglePost: (id, token, success) => {
        axios.get(`${host}/api/Posts/${id}`, {
            params: {
                filter: {
                    include: "PostImage"
                }
            }
        })
        .then(res => {
            success(res);
        })
    },
    uploadImage: (data, token, postId, userId, success) => {
        axios.post(`${host}/api/PostImages/upload?post_id=${postId}&access_token=${token}&user_id=${userId}`, data)
        .then(res => {
            success(res);
        })
    },
    getPostBySlug: (slug, token, success) => {
        axios.get(`${host}/api/Posts/findOne?access_token=${token}`, {
            params: {
                filter: {
                    where: {slug: slug}
                }
            }
        }).then(res => {
            success(res);
        })
    }
}
export default API