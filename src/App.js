import React from 'react';
import {PostsData} from './components/util/PostsData';
import PostList from './components/post-list/PostList';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postsData: []
        }
    }

    componentDidMount() {
        this.setState(() => {
            return {
                postsData: PostsData()
            }
        })
    }

    render() {
        const {postsData} = this.state;
        return (
            <div>
                <h1 className='main-title'>React static list of posts</h1>
                <div>
                    <PostList key={postsData.id}
                              posts={postsData}/>
                </div>
            </div>
        );
    }
}

