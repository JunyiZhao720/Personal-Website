import React,{Component} from "react"
export default class Newpost extends Component {
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
                <div>
                    <form>
                        <div className="form-group">

                            <textarea type="title" className="form-control" id="exampleInputEmail1"
                                      aria-describedby="emailHelp" placeholder='Title' style = {{width:400, height:40,textAlign:'center'}}></textarea>

                        </div>
                        <div className="form-group">

                            <textarea type="text" className="form-control" id="exampleInputPassword1" style = {{width:400, height:250,textAlign:'left'}} placeholder='Begin to share'></textarea>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>

                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>

                </div>
            </div>
        )
    }

}
