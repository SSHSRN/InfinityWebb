using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.InputSystem;

public class animation : MonoBehaviour
{
    Animator animator;

    // Start is called before the first frame update
    void Start()
    {
        animator = GetComponent<Animator>();
    }

    // Update is called once per frame
    void Update()
    {
        // Get the current keyboard input
        Keyboard keyboard = Keyboard.current;

        if (keyboard.wKey.isPressed)
        {
            animator.SetBool("walk", true);
        }
        else if (keyboard.wKey.wasReleasedThisFrame)
        {
            animator.SetBool("walk", false);
        }
            
    }
}
