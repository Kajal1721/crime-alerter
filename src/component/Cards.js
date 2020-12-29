import React, { useState, useEffect } from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Post from './Post';
import Complain from './Complain';
import { db, auth } from '../firebase';
import ImageUpload from './ImageUpload';
import Iframe from 'react-iframe';

function Cards({ user }) {

    const [posts, setPosts] = useState([]);
    const [complains, setComplains] = useState([]);


    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            // every time a new post is added, this code fires...
            setPosts(snapshot.docs.map(doc => ({
                pId: doc.id,
                post: doc.data()
            })));
        })
    }, []);

    useEffect(() => {
        db.collection('complains').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            // every time a new post is added, this code fires...
            setComplains(snapshot.docs.map(doc => ({
                cId: doc.id,
                complain: doc.data()
            })));
        })
    }, []);

    return (
        <div className='cards'>
            <h1> POST YOUR CONTENT HERE!</h1>
            <div className='cards__container'>
                <div className="cards__leftImg" >
                    <img
                        className='cards__img'
                        alt='NOtice'
                        src='images/complainRegister.png'
                    />
                </div>
                <div id="cardRight" className='cards__rightContent'>
                    <h3>Important</h3>
                    <h4>Read before filling the FIR Complain</h4>
                    <p>Actually people dont understand how to write crime so I have given the list of all crime that We can usderstand !</p>
                    <p id="bold">1. VIOLENT CRIME</p>
                    <p id="p">• Murder, Assault, Kidnapping, Manslaughter, Rape</p>
                    <p id="bold"> 2. PROPERTY CRIME </p>
                    <p id="p">• Arson (to an extent), Vandalism, Burglary, Theft, Shoplifting</p>
                    <p id="bold"> 3. PUBLIC ORDER CRIME </p>
                    <p id="p">• Public drunkness, Prostitution, Disoderly Conduct, Drug crimes, Alcohol-related crimes</p>
                    <p id="bold"> 4. WHITE COLLAR CRIME </p>
                    <p id="p">• Fraud, Bribery, Identity theft, Embezzlement, Forgery</p>
                    <p id="bold"> 5. CYBER / HIGH TECH CRIME </p>
                    <p id="p">• Fraud, Illicit computer use, Blackmail, Hacking</p>
                </div>
            </div>
            <div className="cards__show">
                <div className="cards_posts">
                    <div className="cards__imageupload">
                        {user?.displayName ? (
                            <ImageUpload username={user.displayName} />
                        ) :
                            (
                                <h4 className="cards__imageuploadH">Sorry you need to login to upload Or Register Complain</h4>
                            )}
                    </div>
                    {
                        posts.map(({ pId, post }) => (
                            // <Post username={post.username} caption={post.caption} profileUrl={post.profileUrl} imageUrl={post.imageUrl} />
                            <Post pKey={pId} postId={pId} user={user} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
                        ))
                    }
                </div>
                <div className="cards_complain">
                    <div className="cards_news">
                        <p>Check today's News</p>
                        <br/>
                        <Iframe src="https://www.bhaskar.com/local/mp/bhopal/" width="100%" height="500" style="border:none;">
                        </Iframe>
                    </div>
                    <h3>Registered Complain</h3>

                    {
                        complains.map(({ cId, complain }) => (
                            <Complain cKey={cId} user={user} username={complain.username} name={complain.name} address={complain.address} city={complain.city} pincode={complain.pincode} crime={complain.crime} mobno={complain.mobno} />
                        ))
                    }
                </div>
            </div>

        </div>
    );
}

export default Cards;