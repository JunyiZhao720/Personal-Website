import React,{Component} from "react"
export default class News extends Component {
    state = {
        news :[]
    }

    componentDidMount() {
        //模仿ajax得到后台数据
        setTimeout(()=>{
            const news =[
                {title:'new01', id: 1},
                {title:'new02', id: 2}
            ]
           this.setState({news})
        },1000)

    }

    render() {
        return(
            <div>
                <ul>


                    {
                       this.state. news.map((n,index)=>(
                           <li className="text-left" key={index}>
                              <a> {n.title}</a>
                           </li>
                           )


                        )
                    }

                </ul>
            </div>
        )
    }

}
