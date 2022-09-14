import { View, StyleSheet } from 'react-native'
import Header from './Header'
import GreetingButton from './GreetingButton'
import Carousel from './Carousel/Carousel'
import BottomNavBar from './BottomNavBar'

const Home = () => {
    return (
        <View style={styles.homeContainer}>
            <Header />
            <GreetingButton />
            <View style={styles.carouselContainer}>
               <Carousel />
            </View>
            {/* <BottomNavBar /> */}
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    homeContainer: {
        marginTop: 80,
        alignItems: 'center',
        // height: 100,
        // width: 100
    },
    carouselContainer:{
        height: '40%',
        width: '100%',
    }
   
})