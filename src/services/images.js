import image from '../plugins/image'

class ImageService {
  async uploadImage(file) {
    const formData = new FormData()
    formData.set('file', file)
    const response = await image.post('/media/images/', formData, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
    return response.data
  }
}

export default new ImageService()