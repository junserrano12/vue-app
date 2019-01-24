import Api from '@/services/Api'

export default {
    fetchPosts () {
        return Api().get('api/posts')
    },

    addPost (params) {
        return Api().post('api/add_post', params)
    },

    updatePost (params) {
        return Api().put('api/posts/' + params.id, params)
    },

    getPost (params) {
        return Api().get('api/post/' + params.id)
    },

    deletePost (id) {
        return Api().delete('api/posts/' + id)
    },

    getClients () {
        return Api().get('api/clients')
    }
}