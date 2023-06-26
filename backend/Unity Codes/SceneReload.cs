using UnityEngine;
using UnityEditor;
using UnityEngine.Video;

public class SceneReload : MonoBehaviour
{
    public VideoPlayer videoPlayer;
    public float fastForwardSpeed = 2f;

    void Update()
    {
        if (Input.GetKeyDown(KeyCode.O))
        {
            // Open the file selection dialog to choose a video file
            string selectedFile = EditorUtility.OpenFilePanel("Open File", "", "");

            if (!string.IsNullOrEmpty(selectedFile))
            {
                PlayVideo(selectedFile);
            }
            else
            {
                Debug.Log("File selection canceled.");
            }
        }

        if (Input.GetKeyDown(KeyCode.F))
        {
            FastForward();
        }

        if (Input.GetKeyDown(KeyCode.Q))
        {
            // Pause the video playback
            videoPlayer.Pause();
        }

        if (Input.GetKeyDown(KeyCode.E))
        {
            // Resume or start the video playback
            videoPlayer.Play();
        }
    }

    void PlayVideo(string filePath)
    {
        // Set the video URL to the chosen file and start playing
        videoPlayer.url = filePath;
        videoPlayer.Play();
    }

    void FastForward()
    {
        // Increase the video playback time to fast-forward
        videoPlayer.time += fastForwardSpeed;
    }
}
