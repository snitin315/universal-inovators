import * as React from 'react'
import "./mempay.css"
import { TextField, Button } from "@material-ui/core"
import Card from './card'

const Mempay = () => {
    const [data, changedata] = React.useState({
        memname: '',
        memtype: '',
    })
    const [card, setCard] = React.useState(false)
    const textstyles ={
        backgroundColor: '#fff',
        margin: '1rem 0',
        fontFamily: 'Roboto',
        width: '100%'
    }
    const handleProceed = () => {
        let meminfo = [data.memname, data.memtype]
        if(meminfo[0] != '' && meminfo[1] != ''){
            if(document.querySelector(".randomhtml").innerHTML == ''){
                setCard(true)
            }
        }
    }
    React.useEffect(() => {
        let dateTime = new Date()
        console.log(dateTime.toUTCString())
    })
    return (
        <div className="mainContainer">
            <div className="paymentIni">
                <h1 className="sectionHeading">Member Information</h1>
                <TextField id="outlined-basic-name" style={textstyles} value={data.memname} onChange={(e) => changedata({...data, memname: e.target.value})} label="Name" variant="outlined"/>
                <TextField id="outlined-basic-memtype" style={textstyles} value={data.memtype} onChange={(e) => changedata({...data, memtype: e.target.value})} label="Membership Type" variant="outlined"/>
                <Button variant="contained" onClick={handleProceed} style={{width: 150, fontSize: 20, fontFamily: 'Roboto'}} color="primary">
                    Proceed
                </Button>
            </div>
            <div className="randomhtml">
                {
                    card ? <Card name={data.memname} memtype={data.memtype}/> : null
                }
            </div>
        </div>
    )
}

export default Mempay
