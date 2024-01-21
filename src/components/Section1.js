import StartButton from './startButton'
import Illustration1 from '../assets/Illustration1.png'

function FirstSection () {
    return (
        
         <div className='section1'>

            <div className='wrapper'>
                <div className='leftSection'>

                    
                    <div className='illustration1'>
                        <img src={Illustration1} alt='illustration 1'></img>
                    </div>
                    
                </div>
            
                <div className='rightSection'>

                    <div className='description'>
                        <h2>
                            Échelonnez vos paiements
                        </h2>
                        <h3>
                            Faites un paiement en 3, 4 ou 10 fois en carte bleue, sans justificatif
                        </h3>
                        <StartButton />
                    </div>
                  
                </div>
            </div>
        </div>
    )

    

}

export default FirstSection

