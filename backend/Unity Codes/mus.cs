using UnityEngine;
using UnityEditor;
using UnityEngine.Audio;
using System.Collections;

public class mus : MonoBehaviour
{
    public AudioMixer audioMixer;
    private AudioSource audioSource;

    private void Start()
    {
        // Get the AudioSource component
        audioSource = GetComponent<AudioSource>();
    }

    private void Update()
    {
        if (Input.GetKeyDown(KeyCode.U))
        {
            // Open the file selection dialog to choose an audio file
            string filePath = EditorUtility.OpenFilePanel("Select Audio File", "", "wav, mp3");
            if (!string.IsNullOrEmpty(filePath))
            {
                PlayAudio(filePath);
            }
            else
            {
                Debug.Log("File selection canceled.");
            }
        }
    }

    private void PlayAudio(string filePath)
    {
        // Start the coroutine to load the audio clip from file
        StartCoroutine(LoadAudioClip(filePath));
    }

    private IEnumerator LoadAudioClip(string filePath)
    {
        // Use WWW to load the audio file asynchronously
        using (var www = new WWW("file://" + filePath))
        {
            yield return www;

            if (www.error == null)
            {
                // Retrieve the loaded audio clip
                AudioClip audioClip = www.GetAudioClip(false, false);
                if (audioClip != null)
                {
                    // Set the loaded audio clip to the AudioSource
                    audioSource.clip = audioClip;
                    // Set the output audio mixer group to the "Master" group
                    audioSource.outputAudioMixerGroup = audioMixer.FindMatchingGroups("Master")[0];
                    // Play the audio clip
                    audioSource.Play();
                }
                else
                {
                    Debug.LogError("Failed to load audio clip.");
                }
            }
            else
            {
                Debug.LogError("Failed to load audio file: " + www.error);
            }
        }
    }
}
