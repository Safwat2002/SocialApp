import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Feed, Leftbar, Post, Rightbar, Topbar } from "../../components";
import { getTimelinePosts } from '../../redux/timelinePostsSlice';
import './home.css';

export default function Home() {

    // const [loading] = useState(false);

    const dispatch = useDispatch();


    const posts = useSelector(state => state.timelinePosts.posts);
    const loading = useSelector(state => state.timelinePosts.status);

    const profileDataId = useSelector(state => state.user.userData._id);

    useEffect(() => {
        dispatch(getTimelinePosts())
    }, [])



    return (
        <div className="home-page">
            <Topbar />
            <div className="home-content">
                <Leftbar />
                <Feed isLoading={loading === "pending" ? true : false}>
                    {
                        posts?
                        (
                            posts.map((post) => {
                                const isLike = post.likes.includes(profileDataId)
                                const isLove = post.loves.includes(profileDataId)
                                const LoveCount = post.loves.length
                                const LikeCount = post.likes.length
                                const date = new Date(post.createdAt)
                                const string_date = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}`
                                return <Post key={post._id} data={{ ...post, commentCount: 30, date: string_date, isLike, isLove, LoveCount, LikeCount }} />
                            })
                        ):
                        (
                            <h4>Waiting</h4>
                        )
                    }
                </Feed>
                <Rightbar />
            </div>
        </div>
    )
}
