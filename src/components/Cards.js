import { Link } from 'react-router-dom'
import JSZip from 'jszip'
import JSZipUtils from 'jszip-utils'
import { saveAs } from 'file-saver'

export const Cards = ({pagename, folder, listname, smallScreen}) => {

    const cardRow =
        <div className='card_row'>
            {listname.map((item, idx) => {
                const {name, series} = item
                const index = item.files[1]
                return <Card {...{folder, listname, name, series, num: idx + 1, index}} key={`card_${idx}`}/>
            })}
        </div>

    return (
        smallScreen
            ?   <div className='card_row_s'>
                    <h1>{pagename}</h1>
                    {cardRow}
                </div>
            :   cardRow
    )
}

const Card = ({folder, listname, name, series, num, index}) => {
    let type = folder === 'projets' ? 'projet' : 'exercice'

    return (
        <div className="card_block">
            <p className="card_title">{name}</p>
            {folder === 'projets' &&
                <img className="card_pic" src={`${process.env.PUBLIC_URL}assets/projets/annexes/projet_${num}/screen.jpg`}
                    alt={`Aperçu du projet numéro ${num}.`}/>}
            <div className="card_content">
                <p className="card_series">{series}</p>
                <Link to={`${process.env.PUBLIC_URL}/assets/${folder}/${type}_${num}/${index}`} target='_blank'>
                    {eye}
                </Link>
                <Download {...{num, folder, listname}}/>
            </div>
        </div>
    )
}

const eye =
    <svg className="icon_eye" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 14" width="20" height="20">
        <path d="M19.78 6.16a12.54 12.54 0 0 0-4.21-4.47 10 10 0 0 0-11.14 0A12.54 12.54 0 0 0 .22 6.16 1.79 1.79 0 0 0 0 
            7a1.76 1.76 0 0 0 .22.84 12.46 12.46 0 0 0 4.21 4.47A10.1 10.1 0 0 0 10 14a10.17 10.17 0 0 0 5.57-1.68 12.49 12.49 
            0 0 0 4.21-4.48A1.76 1.76 0 0 0 20 7a1.79 1.79 0 0 0-.22-.84zM7.61 2.84A3.11 3.11 0 0 1 10 1.75a.5.5 0 0 1 .38.17.6.6 
            0 0 1 .16.41.63.63 0 0 1-.16.42.5.5 0 0 1-.38.17 2.12 2.12 0 0 0-1.64.74 2.55 2.55 0 0 0-.68 1.78.58.58 0 0 1-.16.42.5.5 
            0 0 1-.38.14.52.52 0 0 1-.38-.17.62.62 0 0 1-.15-.42 3.68 3.68 0 0 1 1-2.57zM14.85 11a8.74 8.74 0 0 1-9.7 0 12.14 12.14 
            0 0 1-3.72-4 11.44 11.44 0 0 1 4.25-4.29A5.7 5.7 0 0 0 5 5.44a5.48 5.48 0 0 0 1.47 3.85 4.69 4.69 0 0 0 7.06 0A5.48 5.48 
            0 0 0 15 5.44a5.7 5.7 0 0 0-.68-2.73A11.44 11.44 0 0 1 18.57 7a12.14 12.14 0 0 1-3.72 4z"/>
    </svg>

const Download = ({num, folder, listname}) => {
    return (
        <svg onClick={() => zipDL(num, folder, listname)} className="icon_dl" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18" width="20" height="20">
            <path d="M10,12.6a.62.62,0,0,1-.45-.21L5.17,7.44A.68.68,0,0,1,5.62,6.3h2.3V1.12A1.08,1.08,0,0,1,9,0H11a1.08,1.08,0,0,1,1,
                1.12V6.3h2.3a.68.68,0,0,1,.45,1.14l-4.38,5A.62.62,0,0,1,10,12.6Z"/>
            <path d="M18.54,18H1.46A1.52,1.52,0,0,1,0,16.43V16A1.52,1.52,0,0,1,1.46,14.4H18.54A1.52,1.52,0,0,1,20,16v.45A1.52,1.52,0,0,1,18.54,18Z"/>
        </svg>
    )
}

function zipDL (num, folder, listname) {

    function zip_exercise () {
        for (let i = 0; i < listname[num-1].files.length; i++) {
            zip.file(
                listname[num-1].files[i],
                urlToPromise(`${process.env.PUBLIC_URL}/assets/${folder}/exercice_${num}/${listname[num-1].files[i]}`)
            )
        }
    }

    function zip_project () {
        for (let i = 0; i < listname[num-1].files.length; i++) {
            zip.file(
                `app/${listname[num-1].files[i]}`,
                urlToPromise(`${process.env.PUBLIC_URL}/assets/projets/projet_${num}/${listname[num-1].files[i]}`)
            )
        }
        for (let i = 0; i < listname[num-1].annexes.length; i++) {
            zip.file(
                `annexes/${listname[num-1].annexes[i]}`,
                urlToPromise(`${process.env.PUBLIC_URL}/assets/projets/annexes/projet_${num}/${listname[num-1].annexes[i]}`)
            )
        }
    }

    const zip = new JSZip()
    folder === 'projets' ? zip_project() : zip_exercise()

    const type = folder === 'projets' ? 'projet' : 'exercice'
    zip.generateAsync({type: 'blob'})
        .then(
            blob => saveAs(blob, `${folder}--${type}_${num}.zip`),
            err => alert(err)
        )
}

function urlToPromise(url) {
    return new Promise (
        (resolve, reject) => {
            JSZipUtils.getBinaryContent(url, (err, data) => {
                err ? reject(err) : resolve(data)
            })
        }
    )
}
