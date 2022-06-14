
function managerCard(managerInfo){
    return `
    <div class="manager card">
        <div class="inner">
            <h1>${managerInfo.name}</h1>
            <h2>Manager</h2>
        </div>
        <div>
            <h3>ID: ${managerInfo.id}</h3>
            <h3>Email: ${managerInfo.email}</h3>
            <h3>Office: ${managerInfo.officeNumber}</h3>
        </div>
    </div>
    `
}

function engineerCard(engineerInfo){
    return `
    <div class="card">
        <div class="inner">
            <h1>${engineerInfo.name}</h1>
            <h2>Engineer</h2>
        </div>
        <div>
            <h3>ID: ${engineerInfo.id}</h3>
            <h3>Email: ${engineerInfo.emamil}</h3>
            <h3>Github: ${engineerInfo.github}</h3>
        </div>
    </div>
    `
}


function internCard(internInfo){
    return `
    <div class="card">
        <div class="inner">
            <h1>${internInfo.name}</h1>
            <h2>Intern</h2>
        </div>
        <div>
            <h3>ID: ${internInfo.id}</h3>
            <h3>Email: ${internInfo.email}</h3>
            <h3>School: ${internInfo.school}</h3>
        </div>
    </div>
    `
}


function makePage(array){

    let cardsArray = [];

    for(let i=0; i < array.length; i++){

        if(array[i].getRole() == "Manager"){
           cardsArray.push(managerCard(array[i]))
        }

        if(array[i].getRole() == "Engineer"){
            cardsArray.push(engineerCard(array[i]))
        }

        if(array[i].getRole() == "Intern"){
            cardsArray.push(internCard(array[i]))
        }

    }

    const page = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <div class="container">
                ${cardsArray.join('')}
        </div>
    </body>
    </html>
    `

    return page;
}


module.exports = makePage;
