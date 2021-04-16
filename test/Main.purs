{- Test file with to test syntax highlighting. -}


module Main.App where
module Main.App
  (main
  ) where

import Prelude

import Data.String as String
import Data.String (Pattern)
import Data.String (Pattern(..), split)


-- Foreign import


foreign import
foreign import calculateInterest :: Number -> Number
foreign import data F :: Type


-- Containers


data D a = D1 a | D2 String


newtype N a = N a


type T = { a :: String }
type T a = { n :: N a, b :: String }


-- infix -- TODO: as


infixr 0 apply as <|
infixl 0 applyFlipped as |>


-- Type class


class Functor v <= Mountable vnode where
  mount :: ∀ m. Element -> T Void (v m)
  unmount :: ∀ m. v m -> v m -> T Void E


derive instance newtypeMySub :: Newtype (MySub vnode msg) _


instance functorA :: Functor A where
   map = split


instance functorA :: Functor A where
   map = split


-- chained instances

class MyShow a where
  myShow :: a -> String

instance showString :: MyShow String where
  myShow s = s
else instance showBoolean :: MyShow Boolean where
  myShow true = "true"
  myShow false = "false"

else instance showA :: MyShow a where
  myShow _ = "Invalid"

-- Records with fields that are reserved words

type Rec =
  { module :: String
  , import :: String
  , data :: String
  , newtype :: String
  }

-- https://github.com/purescript/purescript-in-purescript/blob/master/src/Language/PureScript/Keywords.purs
rec =
  { data: "data"
  , type: "type"
  , foreign: "foreign"
  , import: "import"
  , infixl: "infixl"
  , infixr: "infixr"
  , infix: "infix"
  , class: "class"
  , instance: "instance"
  , module: "module"
  , case: "case"
  , of: "of"
  , if: "if"
  , then: "then"
  , else: "else"
  , do: "do"
  , let: "let"
  , true: "true"
  , false: "false"
  , in: "in"
  , where: "where"
  , forall: "forall"
  }

-- Function, forall


toStr :: forall a. a -> Effect Unit
toStr x = do
  log $ show num
  log $ show str
  where
  num = 1
  str = "Str"


fn :: forall a. a -> String
fn a =
  let b = "str"
  in a + b
