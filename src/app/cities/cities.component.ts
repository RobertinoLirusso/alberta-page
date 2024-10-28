import { Component } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.css'
})
export class CitiesComponent {

  cities = [
    {
      name: 'Calgary',
      description: "Calgary is the largest city in Alberta and the third largest in Canada. Located at the foothills of the Rocky Mountains, it is famous for its vibrant cultural and economic scene. Calgary is home to the Calgary Stampede, one of the world's largest rodeos, which attracts thousands of visitors each year. The city is a major center for the oil and gas industry, but also has a thriving arts community, with numerous galleries, theaters, and festivals.",
      image_url: 'https://facts.net/wp-content/uploads/2023/07/39-facts-about-calgary-1688435897.jpeg'
  },
  {
      name: 'Edmonton',
      description: "Edmonton is the capital of Alberta and is known for its extensive parkland and green spaces. The city has a rich cultural history and hosts events such as the Edmonton International Film Festival and the Heritage Festival, which celebrates the cultural diversity of the region. Edmonton is also home to West Edmonton Mall, one of the largest shopping malls in the world, featuring a theme park, water park, and numerous shops.",
      image_url: 'https://s1.1zoom.me/big0/1/Rivers_Canada_Houses_439957.jpg'
  },
  {
      name: 'Red Deer',
      description: "Located between Calgary and Edmonton, Red Deer is the third largest city in Alberta. It is known for its welcoming community and focus on quality of life. Red Deer features several parks and recreational areas, as well as a thriving arts and cultural scene. The city is also home to Red Deer College, which offers a variety of educational programs.",
      image_url: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/71000/71013-Red-Deer-And-Vicinity.jpg'
  },
  {
      name: 'Lethbridge',
      description: "Lethbridge, situated in southern Alberta, is known for its warm climate and beautiful location near the Oldman and Bow rivers. The city places a strong emphasis on education, housing the University of Lethbridge. Additionally, Lethbridge is famous for its rich Indigenous history and proximity to Waterton Lakes National Park, which offers stunning natural landscapes and outdoor activities.",
      image_url: 'https://www.southernalberta.com/business/datapics/1_3.jpg'
  },
  {
      name: 'Fort McMurray',
      description: "Fort McMurray is known as the heart of Canada's oil sands industry. Although smaller than the other cities mentioned, it has experienced rapid growth due to economic activity in the region. The city is surrounded by natural beauty and provides access to numerous outdoor activities, including hiking, fishing, and camping. Fort McMurray also strives to develop a diverse and sustainable community.",
      image_url: 'https://canadianimmigrant.ca/wp-content/uploads/shutterstock_19130110.jpg'
  }
]

}
