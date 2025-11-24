import { FaBox, FaLeaf, FaComments, FaCreditCard } from "react-icons/fa";
import icon1 from './icon-box-01.svg'
import icon2 from './icon-box-02.svg'
import icon3 from './icon-box-03.svg'
import icon4 from './icon-box-04.svg'

const features = [
  {
    icon: icon1 ,
    title: "Free Shipping",
    description: "Free Shipping for orders over $130",
  },
  {
    icon: icon2,
    title: "Returns",
    description: "Within 30 days for an exchange.",
  },
  {
    icon: icon3,
    title: "Online Support",
    description: "24 hours a day, 7 days a week",
  },
  {
    icon: icon4,
    title: "Flexible Payment",
    description: "Pay with Multiple Credit Cards",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        {features.map((feature, index) => (
          <div key={index}>
            <div className="flex justify-center"><img src={feature.icon} alt="" /></div>
            <h3 className="text-lg font-semibold text-black mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
