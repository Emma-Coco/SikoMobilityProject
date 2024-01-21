import blueBubble from '../assets/Ellipse1.png'

function Banner () {
    return (
        
         <div className='banner'>
            <div className='wrapper'>
                <h1 className='title'>
                Siko Mobility, la plateforme de financement et de services pour la mobilité électrique en abonnement.
                </h1>
                <div className='blueBubble'>
                    <img src={blueBubble} alt='bulle bleue de présentation'></img>
                    <h3>
                    Siko Mobility a financé plus d’1m€ d’engins électriques et conquis plus de 850 clients lors de sa première année en proposant des solutions d’institutions financières aux clients des concessionnaires de mobilité électrique.
                    </h3>
                </div>
                
            </div>
        </div>
    )

    

}

export default Banner

