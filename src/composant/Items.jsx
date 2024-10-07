
import "@/style/main.css";
import chatIcon from '@/assets/icon-chat.png';
import moneyIcon from '@/assets/icon-money.png';
import securityIcon from '@/assets/icon-security.png';




export default function Items(){
    const features=[
        {image:chatIcon ,
        title:"You are our #1 priority",
        desciption : " Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.", },
        
            
        {image:moneyIcon,
         title:"More savings means higher rates",
         desciption:" The more you save with us, the higher your interest rate will be!" },

        {image:securityIcon,
         title:"Security you can trust",
         desciption:
           " We use top of the line encryption to make sure your data and money  is always safe.",},
           
    ]

    return (
        <div className="features">
           <h2 className="sr-only">Features</h2>
          {features.map((element, index) => (
            <div  className="feature-item" key={index}>
              <img className="feature-icon"src={element.image} alt={element.title} />
              <h3 className='"feature-item-title"'>{element.title}</h3>
              <p >{element.description}</p>
            </div>
          ))}
        </div>
      );
    }
    