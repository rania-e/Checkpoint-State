import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Person extends React.Component{
    constructor(){
        // fullName,bio, imgSrc, profession
        super()
        this.state={
            person : {
                fullName :"Charmander",
                bio : "Charmander (Japanese: ヒトカゲ Hitokage) is a Fire-type Pokémon introduced in Generation I.It evolves into Charmeleon starting at level 16, which evolves into Charizard starting at level 36.",
                imgSrc :"https://media.printables.com/media/prints/1045892/images/7927774_c77eb325-33d2-40a1-8147-6a77fcdfac36_25eb7965-2f59-4358-b0e6-acca662613e6/m9wtvcm9wtvcm9wt.jpeg",
                profession : "Pokemon"
            },
            count : 0
        }
    }

    componentDidMount(){
      
        setInterval(() => {
           this.setState({count : this.state.count + 1})
          }, 1000)
    }
    render(){
        return(
            <div style={{display:'flex', justifyContent:"center",flexDirection:"column", alignItems:'center'}}>
                <h1>{this.state.count}</h1>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.state.person.imgSrc} />
                    <Card.Body>
                        <Card.Title>{this.state.person.fullName}</Card.Title>
                        <Card.Text>
                        {this.state.person.bio}
                        </Card.Text>                    
                    </Card.Body>
                </Card>
            </div>          
         
        )
    }
}

export default Person