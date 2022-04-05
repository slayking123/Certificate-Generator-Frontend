import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { generatePDF } from '../DownloadCertificate/index'

export default function Preview(props) {

    const navigate = useNavigate();

    useEffect(() => {
        if (props.certificateData.length === 0) {
            navigate("/")
        }
    }, [navigate, props.certificateData.length]);

    const downloadCertificate = () => {
        let data = props.certificateData;
        for (let i = 0; i < data.length; i++) {
            generatePDF(data[i]["studentname"], data[i]["branch"], data[i]["slno"])
        }
    }

    return (
        <div className='preview-wrapper'>
            <div className="hd1">
                <h1>This is your preview!!!!</h1>
            </div>
            <div id="preview">
                {props.certificateData.map((item, i) => (
                    <div className="img" key={i}>
                        <img src={"http://localhost/day2/image.php?id=" + item.id} alt={item.studentname} />
                        <h1 className="name">{item.studentname}</h1>
                        <h3 className="branch">{item.branch}</h3>
                    </div>
                ))}
            </div>
            <footer>
                <button className="b1" onClick={downloadCertificate}>download</button>
                <button className="b2">mail</button>
            </footer>
        </div>
    )
}
