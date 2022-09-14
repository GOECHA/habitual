import React, {Component} from 'react';
import { SafeAreaView, Text, View } from 'react-native';
// import data from './data';
// import CustomSlider from './CustomSlider';
// import GoodVibeModal from '../Navigation/GoodVibeModal';
import Carousel from 'react-native-snap-carousel'
import GoodVibeView from './GoodVibeView';
// import CheckListView from '../CarouselCards/CheckListView';
// import CalendarView from '../CarouselCards/CalendarView';

class HabitualCarousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeIndex:0,
      carouselItems: [
        // <GoodVibeModal />,
        <GoodVibeView />,
        // <CheckListView />,
        // <CalendarView />
      //   {
          
      //     title:"Item 1",
      //     text: "Text 1",
      // },
      // {
      //     title:"Item 2",
      //     text: "Text 2",
      // },
      // {
      //     title:"Item 3",
      //     text: "Text 3",
      // },
      // {
      //     title:"Item 4",
      //     text: "Text 4",
      // },
      // {
      //     title:"Item 5",
      //     text: "Text 5",
      // },
      ]
    }
  }

  _renderItem = ({ item, index }) => {
    return (
      <View style={{
        backgroundColor:'floralwhite',
        borderRadius: 5,
        height: 250,
        padding: 50,
        marginLeft: 25,
        marginRight: 25, }}>
        <Text style={{fontSize: 30}}>{item.title}</Text>
        <Text>{item.text}</Text>
    </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor:'rebeccapurple', paddingTop: 50, }}>
        <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
        <Carousel
            layout={"default"}
            ref={ref => this.carousel = ref}
            data={this.state.carouselItems}
            sliderWidth={300}
            itemWidth={300}
            renderItem={this._renderItem}
            onSnapToItem = { index => this.setState({activeIndex:index}) } 
          />
        </View>
      </SafeAreaView>
    )
  }
}

export default HabitualCarousel

// export default function Carousel() {

//     return (
//       <View>
//         <CustomSlider goodVibe={<GoodVibeModal />} />
//       </View>
//     );
//   }