import React, { useState, useEffect } from 'react';
import '../styles/birthday.css';

const Birthday = () => {
  const [currentColor, setCurrentColor] = useState('red');
  const [audio] = useState(new Audio(require('../audio/Suits.mp3')));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const colors = [
      'red', 'blue', 'green', 'orange',
      'purple', 'yellow', 'cyan', 'magenta',
      'lime', 'pink', 'teal', 'brown',
      'navy', 'olive', 'maroon', 'coral',
      'indigo', 'turquoise', 'lavender', 'silver'
    ];

    const colorIntervalId = setInterval(() => {
      setCurrentColor(prevColor => {
        const currentIndex = colors.indexOf(prevColor);
        const nextIndex = (currentIndex + 1) % colors.length;
        return colors[nextIndex];
      });
    }, 1000);

    return () => {
      clearInterval(colorIntervalId);
      if (audio) {
        audio.pause();
        audio.currentTime = 0; // Reset the audio when the component unmounts
      }
    };
  }, [audio]);

  useEffect(() => {
    audio.addEventListener('ended', () => setIsPlaying(false));

    return () => {
      audio.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, [audio]);

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(error => {
        console.error('Playback failed', error);
      });
    }
  };

  return (
    <div className="birthday-holder">
      <h1 style={{ color: currentColor, margin: "10px" }}>HAPPY BIRTHDAY KDOG</h1>
      <h2 style={{ margin: "10px" }}>Here are some of your favorite links over the years, the last two are extra spicy, just for you</h2>
      <p style={{ margin: "10px" }}>(Half of these don't even link anymore, make sure to try the first one though)</p>
      <ol>
    <li><a href="https://www.quotev.com/quiz/15008814/Are-you-truly-an-LGBTQ-Ally">Are you truly an LGBTQ Ally? Quiz</a></li>
    <li><a href="https://www.hrc.org/resources/the-history-of-the-lgbt-movement-in-the-u-s">History of LGBTQ Rights</a></li>
    <li><a href="https://www.cdc.gov/lgbthealth/index.htm">LGBTQ Health Resources</a></li>
    <li><a href="https://www.nytimes.com/interactive/2021/04/26/books/best-lgbtq-books.html">Best LGBTQ Books</a></li>
    <li><a href="https://www.aclu.org/know-your-rights/lgbtq-rights/">LGBTQ Legal Rights by State</a></li>
    <li><a href="https://www.glaad.org/resources/ally/2">Guide to Being an LGBTQ Ally</a></li>
    <li><a href="https://www.pride.com/festivals">Pride Festival Finder</a></li>
    <li><a href="https://www.advocate.com/business">LGBTQ-Inclusive Brands</a></li>
    <li><a href="https://www.vulture.com/article/best-lgbt-podcasts.html">Top LGBTQ Podcasts</a></li>
    <li><a href="https://www.thetrevorproject.org/resources/">LGBTQ Youth Resources</a></li>
    <li><a href="https://www.out.com/celebrities">LGBTQ Celebrity Activists</a></li>
    <li><a href="https://www.travelandleisure.com/travel-tips/lgbt-travel">LGBTQ Travel Destinations</a></li>
    <li><a href="https://www.apa.org/topics/lgbtq/transgender">Understanding Gender Identity</a></li>
    <li><a href="https://time.com/collection-post/4406451/lgbt-icons/">Famous LGBTQ Icons</a></li>
    <li><a href="https://www.infoplease.com/culture-entertainment/gender-sexuality/major-milestones-in-lgbtq-rights-movement-timeline">LGBTQ Rights Movement Timeline</a></li>
    <li><a href="https://www.cosmopolitan.com/style-beauty/fashion/g28085664/pride-outfits/">Pride Parade Outfits Ideas</a></li>
    <li><a href="https://www.artsy.net/gene/lgbtq-artists">LGBTQ Art and Expression</a></li>
    <li><a href="https://www.rottentomatoes.com/top/bestofrt/top_100_lgbt_movies/">LGBTQ Film Recommendations</a></li>
    <li><a href="https://www.amnesty.org/en/what-we-do/discrimination/lgbt-rights/">LGBTQ Rights Around the World</a></li>
    <li><a href="https://www.npr.org/series/919383539/pride-month">Celebrating LGBTQ Pride Month</a></li>
    <li><a href="https://www.goodreads.com/shelf/show/lgbtq-erotic-fiction">LGBTQ Erotic Fiction</a></li>
    <li><a href="https://www.queerty.com/tags/adult-film-stars">LGBTQ Adult Film Stars and Their Impact</a></li>
</ol>


    </div>
  );
};

export default Birthday;
