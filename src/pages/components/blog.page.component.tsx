import car1 from '../../assets/images/3.jpg'
import BlogComponent from '../../components/blog.components'

const Blog = () => {
    return (
        <>
            <div className={`container mx-auto`}>
                <div className="container mx-auto mt-20">
                    <h3 className={`text-center text-sm text-customOrange`}>
                        Our Blog
                    </h3>
                    <h1 className={`text-center text-2xl font-bold`}>
                        Latest <span className={`text-customOrange`}>News</span>
                    </h1>
                </div>
                <div
                    className={`mt-20 grid grid-cols-3 justify-items-center gap-4`}
                >
                    <BlogComponent
                        image={car1}
                        subTitle="Rental"
                        title=" Document Required for Car Rental"
                        date={29}
                        month="APR"
                    />
                </div>
            </div>
        </>
    )
}

export default Blog
