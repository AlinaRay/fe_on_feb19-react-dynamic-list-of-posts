import React from 'react';
import {getPostsData} from './components/util/PostsData';
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
                user: '',
                all: ''
            },
        }
    }

    loadData = () => {
        this.setState({
            isLoaded: true,
        });
        getPostsData().then(
            externalData => {
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
        return this.state.postsData.filter(post => {
            if (fieldType === 'all') {
                return post.title.trim().toLowerCase().includes(searchFieldValue) ||
                    post.body.trim().toLowerCase().includes(searchFieldValue) ||
                    post.user.name.trim().toLowerCase().includes(searchFieldValue)
            } else if (fieldType === 'user') {
                return post.user.name.trim().toLowerCase().includes(searchFieldValue)
            } else {
                return post[fieldType].trim().toLowerCase().includes(searchFieldValue)
            }
        });
    };
    updateSearchFieldsValue = (e, {name, value} = e.target) => {
        const newFieldValue = this.state.searchFieldValue;
        Object.keys(newFieldValue).forEach((item) => {
            newFieldValue[item] = item === name ? value : '';
        });
        this.setState({
                searchFieldType: name,
                searchFieldValue: newFieldValue,
                postsToRender: this.showFilteredPosts() || this.state.postsData
            }
        );
    };

    render() {
        const {postsData, postsToRender, isLoaded, searchFieldValue: {title, body, user, all}} = this.state;
        const postsToShow = postsToRender || postsData;
        return (
            <div>
                <h1
                    className='main-title'>
                    React dynamic list of posts
                </h1>
                {postsData ? (
                    <div>
                        <span className='subtitle'>
                            Amout of shown posts is {postsToShow.length}
                        </span>
                        <div
                            className='input-wrapper'>
                            <SearchField
                                searchFieldType='all'
                                searchFieldValue={all}
                                updateSearchFieldsValue={this.updateSearchFieldsValue}
                            />
                            <SearchField
                                searchFieldType='title'
                                searchFieldValue={title}
                                updateSearchFieldsValue={this.updateSearchFieldsValue}
                            />
                            <SearchField
                                searchFieldType='body'
                                searchFieldValue={body}
                                updateSearchFieldsValue={this.updateSearchFieldsValue}
                            />
                            <SearchField
                                searchFieldType='user'
                                searchFieldValue={user}
                                updateSearchFieldsValue={this.updateSearchFieldsValue}
                            />
                        </div>
                        <PostList
                            posts={postsToShow}/>
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
