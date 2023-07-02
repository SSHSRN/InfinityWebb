using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class scene : MonoBehaviour
{
    // Start is called before the first frame update
  private void OnTriggerEnter(Collider other)
    {
        SceneManager.LoadScene(2);
        Debug.Log("You have entered the trigger");
    }
}
