import React, {Component} from 'react'
import '.App.css'

import IndiretaPai from './components/basico/IndiretaPai'
import Estado from './components/basico/Estado'
import FamiliaClone from './components/basico/FamiliaClone'
import FamiliaMembroClone from './components/basico/MembroFamiliaClone'
import Familia from './components/basico/Familia'
import Card from './components/layout/Card'
import Propridades from './components/basico/Propriedades'
import OlaMundo from './components/basico/OlaMundo'

class App extends Component {
    render() {
        return (
            <div className="App" >
                <h1>Exemplos React</h1>

                <div className="Cards">

                    <Card titulo="Comunicação Indireta (de filho para pai)" cor="#ffb400">
                        <IndiretaPai />
                    </Card>
            </div>
        </div>
        )
    }
}
export default App;
