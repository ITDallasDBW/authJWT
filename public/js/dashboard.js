const token = localStorage.getItem('token')

$.ajax({
  method: 'GET',
  url: 'api/protected',
  headers: {
    Authorization: `Bearer ${token}`
  },
  success: response => $('.title').html(response.data),
  error: error => window.location = "/"
})

$('.logout').on('click', () => {
  localStorage.removeItem('token')
  window.location = '/'
})
