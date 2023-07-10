using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class script : MonoBehaviour
{
    // Start is called before the first frame update
private void OnCollisionEnter(Collision other)
{
        SceneManager.LoadScene(5);
}
}
