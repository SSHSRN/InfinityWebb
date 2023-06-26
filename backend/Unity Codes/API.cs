using UnityEngine;
using UnityEngine.Networking;
using System.Collections;

public class API : MonoBehaviour
{
    private string apiUrl = "http://localhost:5000/signup";

    void Start()
    {
        StartCoroutine(GetDataFromAPI());
    }

    IEnumerator GetDataFromAPI()
    {
        using (UnityWebRequest webRequest = UnityWebRequest.Post(apiUrl, "POST"))
        {
            
            yield return webRequest.SendWebRequest();

            if (webRequest.result == UnityWebRequest.Result.ConnectionError || webRequest.result == UnityWebRequest.Result.ProtocolError)
            {
                Debug.LogError("Error: " + webRequest.error);
            }
            else
            {
                // Successful request
                string response = webRequest.downloadHandler.text;
                Debug.Log("Response: " + response);

                
            }
        }
    }
}
