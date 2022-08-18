function displayReadTime(min){
    const bento = '🍱'
    const coffeeCup = '☕️';
    let emoji= '';
    if (min<30) {
        let numCoffeeCups= Math.ceil(min/5);
    console.log(`Time to Read: ${numCoffeeCups}`)
    for (let index = 0; index < numCoffeeCups; index++) {
        emoji += coffeeCup;
    }
    return emoji;
    } else {
      let numBento = Math.ceil(min/10);
      for (let index = 0; index < numBento; index++) {
        emoji += bento;
    }
    return emoji;

    }

}


function Article({title, date= "January 1, 1970", preview, minutes}){
    const readTime = displayReadTime(minutes);
    console.log(readTime);
    return(
        <article>
            <h3>{title}</h3>
            <small>{date}   {readTime} {minutes} minutes to read</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;