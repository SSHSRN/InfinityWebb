using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class script1 : MonoBehaviour
{
    CursorLockMode wantedMode;

  void Start()
  {
    wantedMode = CursorLockMode.None;
    Cursor.lockState = wantedMode;
    Cursor.visible = true;
  }
    // Start is called before the first frame update
public void Playgame1(){
        
    SceneManager.LoadScene(0);

}
}
