import { Component } from '@angular/core';

@Component({
  selector: 'app-top-attractions',
  templateUrl: './top-attractions.component.html',
  styleUrl: './top-attractions.component.css'
})
export class TopAttractionsComponent {

  top_attractions = [
    {
      name: 'Banff National Park and Lake Louise',
      description: "One of the most iconic destinations in Alberta, Banff National Park is known for its stunning mountain scenery, crystal-clear lakes, and abundant wildlife. Lake Louise, within the park, is particularly famous for its turquoise waters and surrounding glaciers, attracting visitors year-round.",
      image_url: 'https://cdn.kimkim.com/files/a/content_articles/featured_photos/4e6bf56b43624c6e801daacded92f6752614fa13/big-cd3f5ea7861013b40959fd36be5335c0.jpg'
    },
    {
      name: 'Jasper National Park',
      description: "Jasper National Park is the largest national park in the Canadian Rockies, offering breathtaking landscapes, including mountains, glaciers, waterfalls, and pristine wilderness. Popular activities include hiking, wildlife spotting, and visiting the Columbia Icefield and Athabasca Falls.",
      image_url: 'https://www.authentikcanada.com/uploads/images/orig/blog/4promenade-des-glaciers_1.jpg'
    },
    {
      name: 'Calgary Stampede',
      description: "Known as 'The Greatest Outdoor Show on Earth,' the Calgary Stampede is a world-famous rodeo and festival held every July. It showcases Alberta's cowboy heritage with rodeo events, concerts, parades, and exhibitions.",
      image_url: 'https://livewirecalgary.com/wp-content/uploads/2024/07/20240705-Stampede-Parade-0045-1024x683.jpg'
    },
    {
      name: 'Drumheller and the Royal Tyrrell Museum',
      description: "Drumheller, known as the 'Dinosaur Capital of the World,' is home to the Royal Tyrrell Museum, featuring one of the world’s most extensive collections of dinosaur fossils. The surrounding Badlands offer unique landscapes and hiking opportunities.",
      image_url: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/516000/516320-worlds-largest-dinosaur.jpg'
    },
    {
      name: 'Waterton Lakes National Park',
      description: "Waterton Lakes National Park is a UNESCO World Heritage Site known for its stunning landscapes, including mountains, lakes, and rich biodiversity. It's a quieter alternative to Banff and Jasper, offering hiking, wildlife viewing, and boating.",
      image_url: 'https://www.globalnationalparks.com/wp-content/uploads/waterton-lakes-national-park.jpg'
    },
    {
      name: 'Columbia Icefield',
      description: "Located between Banff and Jasper National Parks, the Columbia Icefield is one of the largest icefields in North America. Visitors can take guided tours onto the Athabasca Glacier or explore the Skywalk, a glass-floored walkway overlooking the Sunwapta Valley.",
      image_url: 'https://www.banffadventures.com/site/assets/files/8060/ice_explorer_tour.2000x1198.jpg'
    },
    {
      name: 'Head-Smashed-In Buffalo Jump',
      description: "A UNESCO World Heritage Site, Head-Smashed-In Buffalo Jump is one of the best-preserved buffalo jumps in the world, providing insight into Indigenous hunting practices and history.",
      image_url: 'https://whc.unesco.org/uploads/thumbs/site_0158_0001-1200-630-20120917155504.jpg'
    },
    {
      name: 'Peyto Lake',
      description: "Famous for its striking blue color caused by glacial rock flour, Peyto Lake is a popular spot for photographers and nature lovers, especially from the viewpoint on the Icefields Parkway.",
      image_url: 'https://www.jasonweissphotography.com/images/960/peyto-lake-banff.jpg'
    },
  ]

}
