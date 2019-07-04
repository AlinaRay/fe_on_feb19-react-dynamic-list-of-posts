import React from 'react';
import {PostsData} from './components/util/PostsData';
import PostList from './components/post-list/PostList';
import SearchField from "./components/search-field/SearchField";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            searchFieldType: 'title',
            searchFieldValue: {
                title: '',
                body: '',
                user: ''
            }
        }
    }

    loadData = () => {
        this.setState({
            isLoaded: true,
        });
        this._asyncRequest = PostsData().then(
            externalData => {
                this._asyncRequest = null;
                this.setState({
                    postsData: externalData
                });
            }
        );
    };
    showFilteredPosts = () => {

        const fieldType = this.state.searchFieldType;
        const searchFieldValue = this.state.searchFieldValue[fieldType].trim().toLowerCase();
        if (!searchFieldValue.trim()) {
            return;
        }
        if (fieldType === 'user') {
            return this.state.postsData.filter(
                post => post.user.name.trim().toLowerCase().includes(searchFieldValue)
            )
        }
        return this.state.postsData.filter(
            post => post[fieldType].trim().toLowerCase().includes(searchFieldValue)
        );
    };
    updateSearchFieldsValue = (e) => {
        this.setState({
            searchFieldType: e.target.name
        });
        switch (e.target.name) {
            case 'title':
                this.setState({
                    searchFieldValue: {
                        'title': e.target.value,
                        'body': '',
                        'user': ''
                    }
                });
                break;
            case 'body':
                this.setState({
                    searchFieldValue: {
                        'title': '',
                        'body': e.target.value,
                        'user': ''
                    }
                });
                break;
            case 'user':
                this.setState({
                    searchFieldValue: {
                        'title': '',
                        'body': '',
                        'user': e.target.value
                    }
                });
                break;
            default:
                console.log('unknown type');
                break;
        }
    };

    render() {
        const {postsData, isLoaded, searchFieldValue: {title, body, user}} = this.state;
        let postsToRender = this.showFilteredPosts() || postsData;
        return (
            <div>
                <h1
                    className='main-title'>
                    React dynamic list of posts
                </h1>
                {postsData ? (
                    <div>
                        <span className='subtitle'>
                            Amout of shown posts is {postsToRender.length}
                        </span>
                        <form
                            className='form'>
                            <SearchField
                                key={1}
                                searchFieldType='title'
                                searchFieldValue={title}
                                updateSearchFieldsValue={this.updateSearchFieldsValue}
                            />
                            <SearchField
                                key={2}
                                searchFieldType='body'
                                searchFieldValue={body}
                                updateSearchFieldsValue={this.updateSearchFieldsValue}
                            />
                            <SearchField
                                key={3}
                                searchFieldType='user'
                                searchFieldValue={user}
                                updateSearchFieldsValue={this.updateSearchFieldsValue}
                            />
                        </form>
                        <PostList
                            posts={postsToRender}/>
                    </div>
                ) : (
                    <button
                        className='button'
                        onClick={this.loadData}
                        disabled={isLoaded}>
                        {isLoaded ? 'Loading' : 'Details'}
                    </button>
                )}
            </div>
        );
    }
}
