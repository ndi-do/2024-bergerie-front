export default function PagePodcast() {
    return (
        <div>
            <h1 className="font-bold text-3xl text-blue-600 text-center">Podcast</h1>
            <p className="text-center text-blue-600">Écoutez les derniers épisodes de notre podcast sur l'environnement et les océans.</p>
            <div className="flex justify-center m-8">
                <iframe className="item-center" width="560" height="315" src="https://www.youtube.com/embed/xNRarMALmIo?si=jWiXPweH-iBK7kQM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="flex justify-center m-8">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/v9U6zs2ZPpY?si=LSTX8dqX6XeJRvg_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    );
}
