fetch('https://www.reddit.com/r/aww/.json')
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            console.error('Error fetching data:', data.error);
            return;
        }

        const posts = data.data.children;

        const postsContainer = document.getElementById('posts-container');

        posts.forEach(post => {
            const postData = post.data;
            const postElement = document.createElement('div');
            postElement.classList.add('post');

            const titleElement = document.createElement('div');
            titleElement.classList.add('post-title');
            titleElement.textContent = postData.title;

            const thumbnail = postData.thumbnail;
            const previewImage = postData.preview && postData.preview.images[0].source.url;

            const imageElement = document.createElement('img');
            imageElement.src = thumbnail === 'self' ? previewImage : thumbnail;
            imageElement.alt = postData.title;

            const linkElement = document.createElement('a');
            linkElement.href = 'https://www.reddit.com' + postData.permalink;
            linkElement.classList.add('post-link');
            linkElement.textContent = 'View on Reddit';

            postElement.appendChild(titleElement);
            postElement.appendChild(imageElement);
            postElement.appendChild(linkElement);

            postsContainer.appendChild(postElement);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });