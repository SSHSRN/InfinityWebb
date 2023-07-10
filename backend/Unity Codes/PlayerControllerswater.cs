using UnityEngine;
using UnityEngine.SceneManagement;
public class PlayerControllerswater : MonoBehaviour
{
    private int collisionCount = 0;

    private void OnCollisionEnter(Collision collision)
    {
        if (collision.gameObject.CompareTag("Enemy"))
        {
            collisionCount++;

            if (collisionCount >= 3)
            {
                SetPlayerOut();
            }
        }
    }

    private void SetPlayerOut()
    {
        Debug.Log("Player is out!");

        // Add any additional logic or actions you want to perform when the player is out
        // For example, you can destroy the player object 
        // reload the active scene

        SceneManager.LoadScene(2);
    }
}
