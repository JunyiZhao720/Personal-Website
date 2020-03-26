import React,{Component} from "react"
export default class Diary extends Component {

    state = {
        diary :[]
    }

    componentDidMount() {
        //模仿ajax得到后台数据
        setTimeout(()=>{
            const diary =[
                {title:'diary01', id: 1},
                {title:'diary02', id: 2}
            ]
            this.setState({diary})
        },1000)

    }

    render() {
        return(
            <div>
                <ul>


                    {
                        this.state. diary.map((n,index)=>(
                                <li key={index}>
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
