export const getList = async () => {
    
    var response = await fetch("https://api.proektrodina.ru/api/cases/testlist", {
        method: 'POST',
        body: null
    })
    var data = await response.json()
    //console.log(data)
    return(data)
}

export const create = async (title, description, date) => {
    var data = new FormData;
    data.append("title", title)
    data.append("description", description)
    data.append("date", date)
    var response = await fetch("https://api.proektrodina.ru/api/cases/testcreate", {
        method: 'POST',
        body: data
    })
    var answer = await response.json()
    console.log(answer)
}

export const del = async (id) => {
    var data = new FormData;
    data.append("id", id)
    var response = await fetch("https://api.proektrodina.ru/api/cases/testdelete", {
        method: 'POST',
        body: data
    })
    var answer = await response.json()
    console.log(answer)

}

//export const addNew = async (title, description, date) => {
//    return()
//}