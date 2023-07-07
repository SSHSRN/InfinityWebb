using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
public class scene : MonoBehaviour
{
    // Start is called before the first frame update
private void OnCollisionEnter(Collision other)
{
    if (other.gameObject.tag == "Player")
    {
        
        SceneManager.LoadScene(4);
    }
}
}
