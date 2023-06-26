using System.Collections;
using System.Collections.Generic;
using UnityEngine.Video;
using UnityEngine;

public class video : MonoBehaviour
{
    // Pause the video when collision occurs
    private void OnCollisionEnter(Collision other)
    {
        // Get the VideoPlayer component attached to the same GameObject
        VideoPlayer videoPlayer = GetComponent<VideoPlayer>();
        Debug.Log(videoPlayer);
        
        // Pause the video playback
        videoPlayer.Pause();
    }

    // Resume the video when collision ends
    private void OnCollisionExit(Collision other)
    {
        // Get the VideoPlayer component attached to the same GameObject
        VideoPlayer videoPlayer = GetComponent<VideoPlayer>();
        
        // Resume the video playback
        videoPlayer.Play();
    }
}
