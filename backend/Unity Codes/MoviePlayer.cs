using UnityEngine;
using UnityEngine.Video;

public class MoviePlayer : MonoBehaviour
{
    public VideoPlayer videoPlayer;
    public string videosFolderPath = "Videos"; // Folder path relative to the "Assets" folder
    public string[] videoFileNames; // Array of video file names

    private int currentVideoIndex = 0;

    private void Start()
    {
        // Load the list of video file names from the folder
        videoFileNames = System.IO.Directory.GetFiles(Application.dataPath + "/" + videosFolderPath);

        // Start playing the first video
        PlayVideo();
    }

    private void Update()
    {
        // Check for input to navigate between movies
        if (Input.GetKeyDown(KeyCode.Alpha0))
        {
            PlayVideo(9);
        }
        else if (Input.GetKeyDown(KeyCode.Alpha1))
        {
            PlayVideo(0);
        }
        else if (Input.GetKeyDown(KeyCode.Alpha2))
        {
            PlayVideo(1);
        }
        else if (Input.GetKeyDown(KeyCode.Alpha3))
        {
            PlayVideo(2);
        }
        else if (Input.GetKeyDown(KeyCode.Alpha4))
        {
            PlayVideo(3);
        }
        else if (Input.GetKeyDown(KeyCode.Alpha5))
        {
            PlayVideo(4);
        }
        else if (Input.GetKeyDown(KeyCode.Alpha6))
        {
            PlayVideo(5);
        }
        else if (Input.GetKeyDown(KeyCode.Alpha7))
        {
            PlayVideo(6);
        }
        else if (Input.GetKeyDown(KeyCode.Alpha8))
        {
            PlayVideo(7);
        }
        else if (Input.GetKeyDown(KeyCode.Alpha9))
        {
            PlayVideo(8);
        }
        else if (Input.GetKeyDown(KeyCode.LeftArrow))
        {
            PlayPreviousVideo();
        }
        else if (Input.GetKeyDown(KeyCode.RightArrow))
        {
            PlayNextVideo();
        }
    }

    private void PlayVideo()
    {
        PlayVideo(currentVideoIndex);
    }

    private void PlayVideo(int index)
    {
        if (index < 0 || index >= videoFileNames.Length)
        {
            Debug.Log("Invalid video index!");
            return;
        }

        // Stop the current video playback
        videoPlayer.Stop();

        // Set the video player's source to a video file
        videoPlayer.source = VideoSource.Url;
        videoPlayer.url = "file://" + videoFileNames[index];

        // Subscribe to the video player's event
        videoPlayer.loopPointReached += OnVideoEnd;

        // Play the video
        videoPlayer.Play();

        // Update the current video index
        currentVideoIndex = index;
    }

    private void PlayPreviousVideo()
    {
        int previousIndex = currentVideoIndex - 1;
        if (previousIndex >= 0)
        {
            PlayVideo(previousIndex);
        }
    }

    private void PlayNextVideo()
    {
        int nextIndex = currentVideoIndex + 1;
        if (nextIndex < videoFileNames.Length)
        {
            PlayVideo(nextIndex);
        }
    }

    private void OnVideoEnd(VideoPlayer player)
    {
        // Called when the video reaches the end
        Debug.Log("Video finished playing!");

        // Stop the video playback
        player.Stop();

        // Play the next video
        PlayNextVideo();
    }
}
