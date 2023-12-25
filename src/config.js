const config = {
  development: {
    apiUrl: 'https://localhost:8000/api/',
    storageUrl: 'https://localhost:8000/storage/', 
  },
  production: {
    apiUrl: 'https://localhost:8000/api/',
    storageUrl: 'https:/localhost:8000/storage/', 
  },
};

export default process.env.NODE_ENV === 'production' ? config.production : config.development;