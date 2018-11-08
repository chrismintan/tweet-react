var monkey = "hello";
console.log(tweets[0])
ReactDOM.render(
    <div>
      {monkey}
    </div>,
    document.getElementById('root')
);

class User extends React.Component {
  render() {
    return (
      <ul><span>{this.props.name}</span> Tweeted at: <span className="text-primary">{this.props.time}</span>
        <li>{this.props.tweet}</li>
      </ul>
    )
  }
}

class List extends React.Component {
  render() {
    let message = this.props.data.map( (data, index) => {
      return <div className="card"><User key={index} name={data.user.name} tweet={data.text} time={data.created_at}></User></div>
    })
    return (
      <div className="hov">{message}</div>
    )
  }
}

ReactDOM.render(
  <div>
    <List data={tweets} />
  </div>,
  document.getElementById('root')
)









