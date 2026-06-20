
<!DOCTYPE html>
<html>
<head>
  <title>VIPX Player</title>
  <style>
    body { background: #000; color: #fff; font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
    .card { background: #111; padding: 30px; border-radius: 20px; text-align: center; border: 1px solid #333; }
    button { padding: 20px 40px; cursor: pointer; background: #fff; border: none; border-radius: 50px; font-weight: bold; }
  </style>
</head>
<body>
  <div class="card">
    <h1>VIPX PLAYER</h1>
    <button onclick="playMusic()">PLAY MUSIC</button>
    <audio id="audioPlayer"></audio>
    <p id="status" style="margin-top: 20px; color: #888;"></p>
  </div>

  <script>
    function playMusic() {
      const player = document.getElementById('audioPlayer');
      const status = document.getElementById('status');
      // This is the URL you confirmed is working
      player.src = 'https://vipx-music-player-backend.onrender.com/api/stream/work';
      player.play()
        .then(() => status.innerText = "Playing: Work")
        .catch(err => status.innerText = "Error: " + err);
    }
  </script>
</body>
</html>
