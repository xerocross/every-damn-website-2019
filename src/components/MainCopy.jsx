import { connect } from "react-redux";
import React from "react";
import BaseComponent from "./BaseComponent.jsx";

class MainCopy extends BaseComponent {
    render () {
        return (
            <div className = "MainCopy" data-testid="MainCopy">
                <div>
                    <p>
                        In this web page I'm going to explain how to get all the things you want.
                    </p>
                    <h2>How to Make Lots of Money</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis vehicula lorem, eu vehicula elit tempor ac. Nulla at sodales purus, vel consectetur lectus. Aliquam erat volutpat. Vivamus pellentesque felis urna, eu iaculis lacus cursus a. Integer condimentum magna ac placerat sollicitudin. Sed volutpat sit amet nisl sit amet maximus. In suscipit dignissim urna, a accumsan eros porta eu. Morbi sed aliquet ex. Donec quis neque lorem. Integer quis purus sodales, ultricies velit eget, rhoncus nulla. In a lectus tempus, finibus ex blandit, aliquet lacus. Maecenas condimentum odio sed lorem euismod scelerisque. Fusce semper eget ligula sit amet feugiat. Vivamus quis placerat ligula.</p>


                    <h2>How to Make Good, Loyal Friends</h2>

                    <p>Integer mollis metus non est dapibus sagittis. Nam eu eros ac velit eleifend venenatis non sed ex. Suspendisse sit amet velit neque. Phasellus a lorem mollis, sodales mauris vitae, accumsan neque. Integer nec imperdiet dolor, sed gravida odio. Proin tincidunt lacus neque. Proin nec nibh non dui venenatis mollis. Praesent a porttitor mauris. Curabitur eget dui arcu. Donec nec nisl sem. Praesent vitae lorem nec enim viverra consequat eu ut lacus.</p>

                    <h2>How to get More Sex and/or Find That Special Someone</h2>

                    <p>Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras mattis ultricies facilisis. Etiam eleifend nisi nec leo tristique placerat. Maecenas at tempor felis, ac blandit sapien. Donec erat magna, ultricies sed erat eget, tempor maximus nulla. Aenean metus est, rhoncus quis dui sit amet, venenatis sagittis nisi. Etiam gravida imperdiet elit eget luctus. Quisque imperdiet porttitor odio tincidunt suscipit. In commodo quam ut nunc venenatis, non aliquet odio tempus. Quisque enim nisi, lobortis tincidunt nisl vel, dictum maximus sem. Sed venenatis at odio et auctor. Proin vitae ex ac ligula cursus varius id vel sem. Donec sodales ante quis tincidunt malesuada. Cras ultricies cursus pulvinar.</p>

                    <h2>How to Get a Million Subscribers</h2>

                    <p>Aliquam eget euismod massa, a congue velit. Morbi urna ipsum, faucibus eu lectus non, tincidunt scelerisque magna. Vivamus commodo eros eu vestibulum molestie. In sodales leo vitae laoreet feugiat. Morbi dapibus ac diam at bibendum. Fusce dapibus est eu libero placerat, vel posuere sapien auctor. Nunc venenatis nunc vel mauris laoreet eleifend. Aliquam eget sagittis ligula. Nunc cursus luctus justo laoreet ultrices.</p>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
    }
};
const mapDispatchToProps = {
}
export default connect(mapStateToProps, mapDispatchToProps)(MainCopy);