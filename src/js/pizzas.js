var React = require("react");
var data = require('./data.js');

var pizzas = [
    {
        name: "Four Cheese",
        cheese: "four cheese blend",
        toppings: ['tomato sauce', 'oregano'],
        pic: './img/four_cheese.jpg'
    },
    {
        name: 'Greek Pizza',   
        cheese: 'mozzarella',
        toppings: ['tomato sauce', 'kalamata olives', 'feta cheese', 'red onions'],
        pic: './img/greek.jpg'
    },
    {
        name: 'Hawaiian Pizza',   
        cheese: 'mozzarella',
        toppings: ['tomato sauce', 'pinapple', 'bacon strips'],
        pic: './img/hawaiian.jpg'
    },
    {
        name: 'Vegetarian Pizza',   
        cheese: 'mozzarella',
        toppings: ['tomato sauce', 'roasted peppers', 'fresh mushrooms', 'red onions', 'green olives'],
        pic: './img/vegetarian.jpg'
    },
    {
        name: 'Pepperoni Pizza',   
        cheese: 'mozzarella',
        toppings: ['tomato sauce', 'fresh mushrooms', 'pepperoni', 'bacon crumbles'],
        pic: './img/pepperoni.jpg'
    },
    {
        name: 'Pesto chicken Pizza',   
        cheese: 'mozzarella',
        toppings: ['tomato sauce', 'pesto chicken', 'pesto sauce', 'roasted garlic', 'feta cheese'],
        pic: './img/pesto-chicken.jpg'
    },
    {
        name: 'Meat lovers Pizza',   
        cheese: 'mozzarella',
        toppings: ['tomato sauce', 'pepperoni', 'bacon crumbles', 'italian sausage', 'salami'],
        pic: './img/meat-lover.jpg'
    },
    {
        name: 'Custom Pizza',   
        cheese: 'mozzarella',
        toppings: ['your choice of up to 4 toppings'],
        pic: './img/empty.jpg'
    }
    ];


var Pizza = React.createClass({
    handleClick: function(item) {
        if (item.props.name === 'Custom Pizza') {
            this.props.history.push('/custom');
        }
        else {
            var userData = data.getData('info');
            var info = {
                pizzaName: item.props.name,
                toppings: item.props.toppings,
                cheese: item.props.cheese
            };
            Object.assign(userData, info);
            data.setData('info', userData);
            this.props.history.push('/done');
        }
    },
    render(){
    var that = this;
    
        return(
            <li className="col-sm-6 col-md-4">
                <div className="thumbnail">
                    <img src={this.props.pic}/>
                    <div className="caption">
                        <h3>{this.props.name}</h3>
                        <p>Amazing pizza with a {this.props.cheese} base and {(this.props.toppings.map(function(top){return " " + top})).join(',')}</p>
                        <button className="btn btn-primary" onClick={function (ev) {that.handleClick(that)}}>Order now!</button>
                    </div>
                </div>
            </li>
            );
    }
});

var PizzaList = React.createClass({
    render(){
        var that = this;
        return (
            <ul className="row">
                {pizzas.map(function(pizza, i){
                    return <Pizza history={that.props.history} key={pizza.name + i} pic={pizza.pic} name={pizza.name} cheese={pizza.cheese} toppings={pizza.toppings }/>;
                })}
            </ul>
            );
    }
});

module.exports = PizzaList;