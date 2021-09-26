import CardRazaPerros from "components/CardRazasPerros";
import bordercollie from 'media/borderCollie.jpg';
import beagle from 'media/beagle.jpg';
import Layout from "layouts/layout";

function Index(){
    return (
        <Layout>
            <section>
                <h1>Razas de perros</h1>
                <ul className="breedCardContainer">
                    <CardRazaPerros nombreRaza="BorderCollie" imagen={bordercollie}/>
                    <CardRazaPerros nombreRaza="Beagle" imagen={beagle}/>
                </ul>
            </section>
        </Layout>
      )
}

export default Index;