const getActivity = async (req, res, next) => {

    const parametros_body = req.body
    const params = req.params
    const query = req.query
    const url = req.url
    
    console.log(
        `
        Fecha: ${new Date()}
        Ruta ${url}
        Payload:, ${parametros_body}
        Query, ${query}, 
        Parametros, ${params}
        `
    )
    next()
}

 export { getActivity }