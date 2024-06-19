import me from '../../assets/images/me.jpeg'
import Testimonials from '../../components/testimonials.components'

const Testimonial = () => {
    return (
        <>
            <div className={`container mx-auto mt-20`}>
                <h3 className={`text-center text-sm text-customOrange`}>
                    Testimonials
                </h3>
                <h1 className={`text-center text-2xl font-bold`}>
                    What Client Says
                </h1>
                <Testimonials
                    clientName="Purushottam Tiwari"
                    clientReview="Lorem posuere in miss drana en the nisan semere sceriun amiss etiam ornare in the miss drana is lorem fermen nunta urnase mauris in the interdum."
                    image={me}
                />
            </div>
        </>
    )
}

export default Testimonial
