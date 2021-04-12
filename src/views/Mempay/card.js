import React from 'react'

const Card = (props) => {
    const cardnum = Math.floor(Math.random(1)*1000000)

    const Datecalc = () => {
        let curr_date = new Date()
        let year = curr_date.getFullYear()
        let date = curr_date.getDate()
        let month = curr_date.getMonth()
        console.log(curr_date.toUTCString())
        return(
            `${date}/${month}/${++year}`
        )
    }
    return (
        <div>
            <h2>Card Preview</h2>
            <div className="cardContainer">
                <div className="memInfo">
                    <div className="memType">Membership type: {props.memtype}</div>
                    <div className="cardName">Membership Card</div>
                </div>
                <div className="designContainer">
                    <span className="uniinov">Universal Innovators</span>
                    <img src={require("../../assets/img/Path1.png")} alt="" />
                </div>
                <div className="cardInfo">
                    <div className="cardInfoRow">
                        <div className="cardInfoCat">Name: </div>
                        <div className="catField">{props.name}</div>
                    </div>
                    <div className="cardInfoRow">
                        <div className="cardInfoColumn">
                            <div className="cardInfoCat">Card No.: </div>
                            <div className="catField">{cardnum}</div>
                        </div>
                        <div className="cardInfoColumn">
                            <div className="cardInfoCat">Valid Thru: </div>
                            <div className="catField">{Datecalc()}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cardBackContainer">

            </div>
        </div>
    )
}

export default Card
        